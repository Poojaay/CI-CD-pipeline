pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/your-username/ci-cd-project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t yourdockerhub/ci-cd-app:latest .'
      }
    }

    stage('Push Image') {
      steps {
        sh 'docker push yourdockerhub/ci-cd-app:latest'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
