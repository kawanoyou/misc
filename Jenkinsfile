pipeline {
    agent any
    environment {
        SLACK = credentials('slack')
    }
    stages {
        stage('No-op') {
            steps {
                sh "echo ${SLACK}"
                sh "exit 1"
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            slackSend channel: '#ops-room',
                      color: 'good',
                      message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            slackSend channel: '#ops-room',
                      color: 'danger',
                      message: "The pipeline ${currentBuild.fullDisplayName} failed."
        }
        changed {
            echo 'Things were different before...'
        }
    }
}