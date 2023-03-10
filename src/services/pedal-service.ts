import Pedal from "../protocols/pedal.js";
import pedalRepository from "../repositories/pedals-repository.js";
import saleRepository from "../repositories/sales-repository.js";

async function getAllPedals() {
    const result = await pedalRepository.getAll()
    return result;
}

async function getOnePedal(id: number) {
    const result = await pedalRepository.getById(id)
    return result;
}

async function createPedal(newPedal: Pedal, quantity: number){
    const result = await pedalRepository.addPedal(newPedal)

    const { id } = result
    await saleRepository.addStock(id, quantity)

    return result;
}

const pedalService = {
    getAllPedals,
    getOnePedal,
    createPedal
}
  
export default pedalService;