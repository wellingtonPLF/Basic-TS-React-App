import api from "./_axiosConfig";

class PaymentService {
  path: string;
  
  constructor() {
    this.path = "payment"
  }

  async paymentProcess() {
    try{
      const { data } = await api.get(`${this.path}/`);
      return data;
    }
    catch(error) {
      return Promise.reject(error);
    }
  }
}

export default new PaymentService();