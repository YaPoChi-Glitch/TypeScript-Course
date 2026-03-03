/* interface ITransport {
    deliver(): void;
}

class Truck implements ITransport {
    deliver(): void {
        console.log("Доставка на грузовике");
    }
}

class Ship implements ITransport {
    deliver(): void {
        console.log("Доставка на корабле");
    }
}

abstract class Logistics {
    public abstract createTransport(): ITransport;

    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

class RoadLogistics extends Logistics {
    createTransport(): ITransport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport(): ITransport {
        return new Ship();
    }
}

const startapp = (logistics: Logistics) => {
    console.log("Начинаем планирование");
    logistics.planDelivery();
}   

startapp(new RoadLogistics());
startapp(new SeaLogistics()); */

interface Ihandler {
    handle(update: any): void;
}

class MessageHandler implements Ihandler {
    handle(update: any): void {
        console.log("Обработка сообщения");
    }
}

class MessageHandlerFactory {
    static createHandler(type: string): Ihandler {
        if (type === "message") {
            return new MessageHandler();
        }
        throw new Error("Неизвестный тип обработчика");
    }
}

class ButtonHandler implements Ihandler {
    handle(update: any): void {
        console.log("Обработка нажатия кнопки");
    }
}

class HandlerFactory {
    static createHandler(type: string): Ihandler {
        if (type === "message") {
            return new MessageHandler();
        } else if (type === "button") {
            return new ButtonHandler();
        }
        throw new Error("Неизвестный тип обработчика");
    }   
}

const updates = [
    { message: {text: "/start"} },
    { callback_query: {data: "button_click"} }
];

for (const update of updates) {
    const handlerType = update.message ? "message" : "button";
    const handler = HandlerFactory.createHandler(handlerType);
    handler.handle(update);
}
