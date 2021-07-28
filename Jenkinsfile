pipeline {
    agent any
    stages {
        stage('develop') {
            steps {
                sh 'git config remote.origin.fetch "+refs/heads/*:refs/remotes/origin/*"'
                sh 'git fetch'
                sh 'git checkout master'
                sh 'git branch'
                sh 'git status'
            }
        }
    }
}
