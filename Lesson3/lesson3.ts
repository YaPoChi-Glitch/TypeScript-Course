class AudioPlayer {
    private _volume: number = 50; 

    get volume(): number {
        return this._volume;
    }

    set volume(v: number) {
        if (v < 0) {
            this._volume = 0;
        } else if (v > 100) {
            this._volume = 100;
        } else {
            this._volume = v;
        }
    }
}

const player = new AudioPlayer();
player.volume = 150; 
console.log(`Текущая громкость плеера: ${player.volume}`);




class Cart {
    private items: string[] = [];

    addItem(item: string): void {
        this.items.push(item);
    }

    getItems(): string[] {
        return this.items;
    }

    clear(): void {
        this.items = [];
    }
}

const myCart = new Cart();
myCart.addItem("Ноутбук");
myCart.addItem("Мышка");

console.log("Товары в корзине:", myCart.getItems());
myCart.clear();
console.log("Корзина после очистки:", myCart.getItems());