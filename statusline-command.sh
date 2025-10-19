#!/bin/bash

# Read JSON input from stdin
input=$(cat)

# Get Digital Assistant configuration from environment
DA_NAME="${DA:-Data}"  # Assistant name (defaults to Data)
DA_COLOR="${DA_COLOR:-purple}"  # Color for the assistant name

# Extract data from JSON input
current_dir=$(echo "$input" | jq -r '.workspace.current_dir')
model_name=$(echo "$input" | jq -r '.model.display_name')

# Get directory name
dir_name=$(basename "$current_dir")

# Count items from specified directories
claude_dir="$HOME/.claude"
commands_count=0
mcps_count=0
fabric_count=0

# Count commands (optimized - direct ls instead of find)
if [ -d "$claude_dir/commands" ]; then
    commands_count=$(ls -1 "$claude_dir/commands/"*.md 2>/dev/null | wc -l | tr -d ' ')
fi

# Count MCPs from settings.json (single parse)
mcp_names_raw=""
if [ -f "$claude_dir/settings.json" ]; then
    mcp_data=$(jq -r '.mcpServers | keys | join(" "), length' "$claude_dir/settings.json" 2>/dev/null)
    mcp_names_raw=$(echo "$mcp_data" | head -1)
    mcps_count=$(echo "$mcp_data" | tail -1)
    # Handle case where mcpServers doesn't exist or is null
    if [ -z "$mcps_count" ] || [ "$mcps_count" = "null" ]; then
        mcps_count="0"
    fi
else
    mcps_count="0"
fi

# Count Fabric patterns (optimized - count subdirectories)
fabric_patterns_dir="${HOME}/.config/fabric/patterns"
if [ -d "$fabric_patterns_dir" ]; then
    # Count immediate subdirectories only
    fabric_count=$(find "$fabric_patterns_dir" -maxdepth 1 -type d -not -path "$fabric_patterns_dir" 2>/dev/null | wc -l | tr -d ' ')
fi

# Get last modified note from Main Vault
last_note="None"
vault_path="/Users/robjr/Main Vault"
if [ -d "$vault_path" ]; then
    # Find most recently modified .md file (excluding hidden files and templates)
    last_note_path=$(find "$vault_path" -type f -name "*.md" ! -path "*/.*" ! -path "*/Templates/*" -print0 2>/dev/null | xargs -0 ls -t 2>/dev/null | head -1)
    if [ -n "$last_note_path" ]; then
        # Extract just the filename without extension
        last_note=$(basename "$last_note_path" .md)
        # Truncate if too long (keep it readable)
        if [ ${#last_note} -gt 50 ]; then
            last_note="${last_note:0:47}..."
        fi
    fi
fi

# Tokyo Night Storm Color Scheme
BRIGHT_PURPLE='\033[38;2;187;154;247m'
BRIGHT_BLUE='\033[38;2;122;162;247m'
DARK_BLUE='\033[38;2;100;140;200m'
BRIGHT_GREEN='\033[38;2;158;206;106m'
BRIGHT_ORANGE='\033[38;2;255;158;100m'
BRIGHT_RED='\033[38;2;247;118;142m'
BRIGHT_CYAN='\033[38;2;125;207;255m'
BRIGHT_MAGENTA='\033[38;2;187;154;247m'
BRIGHT_YELLOW='\033[38;2;224;175;104m'

# Map DA_COLOR to actual ANSI color code
case "$DA_COLOR" in
    "purple") DA_DISPLAY_COLOR='\033[38;2;230;230;230m' ;;  # Very light grey (not pure white)
    "blue") DA_DISPLAY_COLOR="$BRIGHT_BLUE" ;;
    "green") DA_DISPLAY_COLOR="$BRIGHT_GREEN" ;;
    "cyan") DA_DISPLAY_COLOR="$BRIGHT_CYAN" ;;
    "magenta") DA_DISPLAY_COLOR="$BRIGHT_MAGENTA" ;;
    "yellow") DA_DISPLAY_COLOR="$BRIGHT_YELLOW" ;;
    "red") DA_DISPLAY_COLOR="$BRIGHT_RED" ;;
    "orange") DA_DISPLAY_COLOR="$BRIGHT_ORANGE" ;;
    *) DA_DISPLAY_COLOR='\033[38;2;230;230;230m' ;;  # Default to very light grey
esac

# Line-specific colors
LINE1_PRIMARY="$BRIGHT_PURPLE"
MODEL_PURPLE='\033[38;2;138;99;210m'

LINE2_PRIMARY="$DARK_BLUE"
LINE2_ACCENT='\033[38;2;110;150;210m'

LINE3_PRIMARY='\033[38;2;224;175;104m'  # Warm amber for knowledge/notes
LINE3_ACCENT='\033[38;2;255;203;107m'

SEPARATOR_COLOR='\033[38;2;140;152;180m'
DIR_COLOR='\033[38;2;135;206;250m'
NOTE_COLOR="$LINE3_ACCENT"

# MCP colors
MCP_MEMORY="$BRIGHT_BLUE"
MCP_DEFAULT="$LINE2_PRIMARY"

RESET='\033[0m'

# Format MCP names efficiently (customize for your MCPs)
mcp_names_formatted=""
for mcp in $mcp_names_raw; do
    case "$mcp" in
        "basic-memory") formatted="${MCP_MEMORY}Memory${RESET}" ;;
        *) formatted="${MCP_DEFAULT}${mcp^}${RESET}" ;;
    esac

    if [ -z "$mcp_names_formatted" ]; then
        mcp_names_formatted="$formatted"
    else
        mcp_names_formatted="$mcp_names_formatted${SEPARATOR_COLOR}, ${formatted}"
    fi
done

# Output the 3-line statusline
# LINE 1 - PURPLE theme with all counts
printf "${DA_DISPLAY_COLOR}${DA_NAME}${RESET}${LINE1_PRIMARY} here, running on ${MODEL_PURPLE}🧠 ${model_name}${RESET}${LINE1_PRIMARY} in ${DIR_COLOR}📁 ${dir_name}${RESET}${LINE1_PRIMARY}, wielding: ${RESET}${LINE1_PRIMARY}⚙️ ${commands_count} Commands${RESET}${LINE1_PRIMARY}, ${RESET}${LINE1_PRIMARY}🔌 ${mcps_count} MCPs${RESET}${LINE1_PRIMARY}, and ${RESET}${LINE1_PRIMARY}📚 ${fabric_count} Patterns${RESET}\n"

# LINE 2 - BLUE theme with MCP names
if [ "$mcps_count" -gt 0 ]; then
    printf "${LINE2_PRIMARY}🔌 MCPs${RESET}${LINE2_PRIMARY}${SEPARATOR_COLOR}: ${RESET}${mcp_names_formatted}${RESET}\n"
fi

# LINE 3 - AMBER theme with last modified note
printf "${LINE3_PRIMARY}📝 Last Note${RESET}${LINE3_PRIMARY}${SEPARATOR_COLOR}: ${RESET}${NOTE_COLOR}${last_note}${RESET}\n"
