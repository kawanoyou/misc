pipeline {
  agent any
  stages {
    stage('a') {
      steps {
        sh 'ls'
        sh 'pwd'
        echo 'a message'
        sleep 3
        timestamps() {
          echo 'foo'
        }

        sh 'exit 1'
      }
    }

  }
}