pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    // Install dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Unit Test') {
            steps {
                script {
                    // Run unit tests
                    sh 'npm run test:unit'
                }
            }
        }
        stage('Integration Test') {
            steps {
                script {
                    // Run integration tests
                    sh 'npm run test:integration'
                }
            }
        }
    }
}






