#!/bin/sh

set -e

. func.sh

df -h
question "ディスクをチェックしてください。作業を進めますか? [yes/no]" "ディスクのチェックで作業を中止します"

confirm_exec "date"
confirm_exec "which zsh"
confirm_exec "uname -a"

ps aux
question "全ての作業が終わりました。どうします? [yes/no]"

echo "おつかれさまでした"
