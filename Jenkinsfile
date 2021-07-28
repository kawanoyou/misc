pipeline {
    agent any
    stages {
        stage('develop') {
            steps {
                sh 'git branch'
                sh 'git checkout master origin/master'
                sh 'git branch'
                sh 'git status'
            }
        }
    }
}
