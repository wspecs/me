node {
  def app
   stage('Build') {
      checkout scm
      sh 'npm install'
      sh 'npm run build:prod'
    }
    
    stage('Create Image') {
      app = docker.build("wspecs/me")
    }
    
    stage('Push Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("latest")
        }
    }
}
