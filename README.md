# 🐳 Docker with Node.js & MongoDB

A simple setup to run a Node.js application with MongoDB using Docker and Docker Compose.

---

## 📦 Tech Stack

* Node.js
* MongoDB
* Docker
* Docker Compose

---

## ⚙️ Setup & Run

### 🔹 Start MongoDB Container

```bash
docker-compose -f mongo.yaml up -d
```

👉 Runs containers in background

---

### 🔹 Stop Containers

```bash
docker-compose -f mongo.yaml down
```

---

### 🔹 Check Docker Networks

```bash
docker network ls
```

---

## 🛠️ Build Node.js App Image

```bash
docker build -t my-docker-node-app:1.0 .
```

---

## ▶️ Run Container

```bash
docker run -d -p 3000:3000 my-docker-node-app:1.0

docker run -d my-docker-node:1.0

```

---

## 🧹 Cleanup Commands

### 🔹 Remove Container

```bash
docker rm <container_id>
```

---

### 🔹 Remove Image

```bash
docker rmi <image_id>
```

---

## ⚠️ Important Notes

* Always remove containers before deleting images
* Use `docker ps -a` to check containers
* Use `docker images` to check images

---

## 📚 Useful Commands

```bash
docker ps        # Running containers
docker ps -a     # All containers
docker images    # List images
docker logs <container_id>
docker logs 2877fb5545af501262f85c01a79b3c912cdc6eed1ebb037735cfd9bd6745ab22(container backend logs id )
docker run <container id>

```

---

## 💡 Pro Tips

* Use Docker volumes for data persistence
* Use custom networks for multi-container apps
* Avoid using `latest` tag in production

---
```bash
  docker exec -it 797afe57a258 /bin/sh  # check envirment 
```
## 👨‍💻 Author




Jamil (Software Developer)
