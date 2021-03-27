pipeline {
  agent any
  stages {
    stage('phpunit') {
      steps {
        sh '''cd php
php composer.phar install
./vendor/bin/phpunit tests/'''
      }
    }

  }
}