pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    environment {
        PATH='/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin'
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}