pipeline {
    agent any
    stages {
        stage('develop') {
            steps {
                sh 'git branch -r'
                sh 'git fetch'
                sh 'git branch -r'
                sh 'git checkout master origin/master'
                sh 'git branch'
                sh 'git status'
            }
        }
    }
}
