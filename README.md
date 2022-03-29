# Web App
I'm using NodeJS to make a simple app with 2 endpoints (api/health-check and api/hello)
How to use:
1. Clone this repository
2. Run 'node server.js'
3. Try 'localhost:3000/api/health-check and localhost:3000/api/hello'

# Docker
I've prepared the Dockerfile to build a docker image but you can customize it if you want
How to use:
1. Clone this repository
2. Build the image
3. Run docker container using the image (docker run -d -p 8080:3000 image_name container_name)
4. The container will run on port 8080
5. Try 'localhost:8080/api/health-check and localhost:8080/api/health-check'
Note: For the kubernetes cluster deployment purposes i also have push the image to DockerHub as fiardika/mekari-node

# Kubernetes
If you want to deploy to the kubernetes, i've prepared folder named 'kubernetes'
How to use:
1. Clone this repository
2. Move to the kubernetes folder
3. Apply (kubectl) all the yaml file
4. Wait to make sure all deployment is running (kubectl get all)
5. Try 'loadbalancer-dns:8080/api/health-check and loadbalancer-dns:8080/api/hello'
6. Or, if you want to test it locally, you can add the loadbalancer IP to your local /etc/hosts and try 'localhost:8080/api/health-check and localhost:8080/api/health-check'

Note:
1. I'm using LoadBalancer type for the service, so after the service.yaml is deployed, we have to wait for the LoadBalancer to propagate.
2. If you don't want to run it using LoadBalancer, you can delete the "type: LoadBalancer" in service.yaml and re-deploy it, then you can use port-forward to 8080 and try it locally
3. I'm using kops in AWS EC2

# Helm-Chart
If you want to deploy it using helm-chart, i've prepared folder named 'helm-chart'
How to use:
1. Clone this repository
2. Run helm install helm_name helm-chart/
3. The rest of my helm-chart configuration is slightly the same as kubernetes configuration (using LoadBalancer)

Note: I'm using helm v3.8.1
