pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/Poojaay/CI-CD-pipeline.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-app:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
