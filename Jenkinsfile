pipeline {
    agent any

    environment {
        KUBECONFIG = 'C:\\kube\\config'
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-app:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/deployment.yaml'
                bat 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
