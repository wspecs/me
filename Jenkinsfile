pipeline {
  agent any
  environment {
    CI = 'true' 
  }
 
  tools {nodejs "node"}
 
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm run build:prod'
      }
    }
  }
}
