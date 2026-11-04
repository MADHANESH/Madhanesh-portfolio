
pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 20, unit: 'MINUTES')
        disableConcurrentBuilds()
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        VERCEL_ORG_ID = credentials('vercel-org-id')
        VERCEL_PROJECT_ID = credentials('vercel-project-id')
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Environment') {
            steps {
                sh '''
                    set -eu
                    node --version
                    npm --version

                    node -e '
                    const [major, minor] =
                      process.versions.node.split(".").map(Number);

                    const supported =
                      (major === 20 && minor >= 19) ||
                      (major === 22 && minor >= 12) ||
                      major > 22;

                    if (!supported) {
                      console.error("Node.js 20.19+ or 22.12+ is required.");
                      process.exit(1);
                    }
                    '
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'test -d dist'
            }
        }

        stage('Prepare Vercel') {
            steps {
                sh '''
                    set -eu

                    mkdir -p .vercel

                    printf '{"orgId":"%s","projectId":"%s"}' \
                      "$VERCEL_ORG_ID" "$VERCEL_PROJECT_ID" \
                      > .vercel/project.json

                    npx --no-install vercel pull \
                      --yes \
                      --environment=production \
                      --token="$VERCEL_TOKEN"
                '''
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh '''
                    set -eu

                    npx --no-install vercel build \
                      --prod \
                      --token="$VERCEL_TOKEN"

                    npx --no-install vercel deploy \
                      --prebuilt \
                      --prod \
                      --token="$VERCEL_TOKEN"
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio successfully deployed to Vercel!'
            archiveArtifacts artifacts: 'dist/**',
                fingerprint: true
        }

        failure {
            echo 'Pipeline failed. Check the Jenkins console output.'
        }

        always {
            deleteDir()
        }
    }
}
