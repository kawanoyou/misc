pipeline {
    agent any
    stages {
        stage('develop') {
            steps {
                sh 'git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"'
                sh 'git fetch'
                sh 'git checkout master'
                sh 'date >> tmp'
                sh 'git status'
                sh 'git diff'
                sh 'git add tmp'
                sh 'git commit -m"tmp更新"'
                sh 'git push origin HEAD'
            }
        }
    }
}
