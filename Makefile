build:
	cd ./orchestrator && docker build -t ghcr.io/lr56c/orchestrator .
	cd ./servicea && docker build -t ghcr.io/lr56c/servicea .
	cd ./serviceb && docker build -t ghcr.io/lr56c/serviceb .

push:
	docker push ghcr.io/lr56c/orchestrator
	docker push ghcr.io/lr56c/servicea
	docker push ghcr.io/lr56c/serviceb

up:
	docker stack deploy -c docker-compose.yml rswam

down:
	docker stack rm rswam

deploy: build push up