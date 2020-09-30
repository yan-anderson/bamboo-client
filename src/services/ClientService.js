import http from "./Http";

class ClientService {
    findAll() {
        return http.get("/client")
    }

    create(data) {
        return http.post("/client", data)
    }

    update(data) {
        return http.put("/client", data)
    }

    delete(id) {
        return http.delete("/client", {params: {id: id}})
    }

    search(data) {
        return http.get('/client/search', {params: data})
    }

}

export default new ClientService();
