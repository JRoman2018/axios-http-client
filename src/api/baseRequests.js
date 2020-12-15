import api from "./http";

export function BaseAxiosRequestsModel(model){
    this.list = async () => await api.get(model);
    this.show = async (id) => await api.get(model+'/'+id);
    this.create = async (data) => await api.post(model,data);
    this.update = async (data) => await api.put(model+'/'+data.id,data);
    this.delete = async (id) => await api.delete(model+'/'+id);
};

export function BaseFetchRequestsModel(model){
    this.list = async () => await fetch(model).then((data) => {
        console.log(data)
    }).catch((error) =>{
        console.log(error)
    });

    //SHOW
    this.show = async (id) => await fetch(model+'/'+id).then((data) => {
        console.log(data)
    }).catch((error) =>{
        console.log(error)
    });

    //CREATE
    this.create = async (data) => await fetch(model,{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
    }).then((res) => {
        console.log(res.json())
    }).then(data => {
        console.log(data)
    }).catch((error) =>{
        console.log(error)
    });

    //UPDATE
    this.update = async (data) => await fetch(model+'/'+data.id,{
        method:'PUT',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        },
    }).then((res) => {
        console.log(res.json())
    }).then(data => {
        console.log(data)
    }).catch((error) =>{
        console.log(error)
    });

    //DELETE
    this.delete = async (id) => await fetch(model+'/'+id,{
        method:"DELETE"
    });
};
