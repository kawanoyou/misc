pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        sh '''cd php
php composer.phar install
./vendor/bin/phpunit --log-junit report.xml tests/
'''
      }
    }

  }
}