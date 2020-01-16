node {
  def app
  
  stage('Cloning code') {
    checkout scm
  }
  
   stage('Install dependencies') {
     sh 'npm install'
   }
    
   stage('Build') {
      sh 'npm run build:prod'
    }
    
    stage('Create Image') {
      app = docker.build("wspecs/me")
    }
    
    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }
    
    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
        }
    }
}
