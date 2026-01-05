<<<<<<< HEAD
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
=======
pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-app:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/'
            }
        }
    }
}
>>>>>>> 89d848dc3c831ea054deb31279003e5d9b48bb2c
