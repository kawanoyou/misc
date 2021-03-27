pipeline {
  agent any
  stages {
    stage('a') {
      parallel {
        stage('a') {
          steps {
            sh 'ls'
            sh 'pwd'
          }
        }

        stage('b') {
          steps {
            sh '''php -m
php -v
php -r"echo date(\'Y-m-d H:i:s\') . PHP_EOL;"
whoami
'''
          }
        }

      }
    }

  }
}