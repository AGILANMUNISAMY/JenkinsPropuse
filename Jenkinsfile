pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('Insatll dependencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('Install playwright'){
            steps{
                bat 'npx playwright install'
            }
        }
        stage('Run cucumber tests'){
            steps{
                bat 'npx cucumber-js'
            }
        }
    }
}