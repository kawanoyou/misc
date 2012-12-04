question()
{
    echo $1
    read INPUT

    if [ -z $2 ]; then
        ABORT_MESSAGE="作業を中止します"
    else
        ABORT_MESSAGE=$2
    fi

    if [ $INPUT != 'yes' -a $INPUT != 'y' ]; then
        echo $ABORT_MESSAGE
        exit
    fi
}

confirm_exec()
{
    echo "次のコマンドを実行していいですか?: $1 [yes/no]"
    read INPUT
    if [ $INPUT = 'yes' -o $INPUT = 'y' ]; then
        echo ">>> $1"
        eval $1
        echo ""
    else
        echo "コマンドの実行を中止します: $1"
        exit
    fi
}
