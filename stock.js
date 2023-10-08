class Producto {
    constructor(id, nombre, tipo, categoria, imagen, descripcion, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const productos = [

    new Producto(1, "Desktop Armada 1", "Desktops", "Equipos", "./img/Img_Productos/id_1.jpg", "Intel Core I3 10100F 8GB 240GB SSD GT 210 WIFI", 259000, 0),
    new Producto(2, "Desktop Armada 2", "Desktops", "Equipos", "./img/Img_Productos/id_2.jpg", "AMD Ryzen 3 4100 16GB 480GB SSD GT 210", 317000, 0),
    new Producto(3, "Desktop Armada 3", "Desktops", "Equipos", "./img/Img_Productos/id_3.jpg", "Intel Core I5 11400F 16GB 480GB SSD RTX 3060", 860000, 0),

    new Producto(4, "Notebook Noblex N14X3000 14", "Notebooks", "Equipos", "./img/Img_Productos/id_4.jpg", "Intel I3 1115G4 8GB Ram 256GB SSD W11", 315000, 0),
    new Producto(5, "Notebook Lenovo V14-ITL 14", "Notebooks", "Equipos", "./img/Img_Productos/id_5.jpg", "Intel Core I5 1135G7 8GB 256GB SSD", 455000, 0),
    new Producto(6, "Notebook HP 15-DY2054LA", "Notebooks", "Equipos", "./img/Img_Productos/id_6.jpg", "Intel Core I5 1135G7 8GB SSD 256GB 15.6 W11", 613000, 0),

    new Producto(7, "Micro Intel I3", "Procesadores", "Componentes", "./img/Img_Productos/id_7.jpg", "Intel I3-10105F 4.4Ghz 6Mb S.1200", 75300, 0),
    new Producto(8, "Micro Intel I5", "Procesadores", "Componentes", "./img/Img_Productos/id_8.jpg", "Intel Core I5 11600K ROCKET LAKE 6/12 4.90GHZ 12MB LGA1200", 248000, 0),
    new Producto(9, "Micro Intel I7", "Procesadores", "Componentes", "./img/Img_Productos/id_9.jpg", "Intel Core i7 13700F 5.2GHz Turbo Socket 1700", 374000, 0),

    new Producto(10, "Mother Asus", "Motherboards", "Componentes", "./img/Img_Productos/id_10.jpg", "Prime H610M-K DDR4 S1700", 89100, 0),
    new Producto(11, "Mother GIGABYTE", "Motherboards", "Componentes", "./img/Img_Productos/id_11.jpg", "H610M S2H DDR4 S1700", 105400, 0),
    new Producto(12, "Mother MSI", "Motherboards", "Componentes", "./img/Img_Productos/id_12.jpg", "MAG B760M MORTAR DDR4 S1700", 168700, 0),

    new Producto(13, "Cooler CPU", "Refrigeracion", "Componentes", "./img/Img_Productos/id_13.jpg", "ID-Cooling SE-902-SD V2", 9300, 0),
    new Producto(14, "Cooler Darkflash", "Refrigeracion", "Componentes", "./img/Img_Productos/id_14.jpg", "Darkair White Fixed RGB", 24700, 0),
    new Producto(15, "Cooler CPU Master", "Refrigeracion", "Componentes", "./img/Img_Productos/id_15.jpg", "HYPER 212 TURBO ARGB", 49800, 0),

    new Producto(16, "Ram OEM", "Memorias Ram", "Componentes", "./img/Img_Productos/id_16.jpg", "4GB 3200 Mhz DDR4 BULK", 9800, 0),
    new Producto(17, "Ram Corsair", "Memorias Ram", "Componentes", "./img/Img_Productos/id_17.jpg", "DDR4 8GB 2666Mhz Vengeance LPX Black", 23300, 0),
    new Producto(18, "Ram Patriot", "Memorias Ram", "Componentes", "./img/Img_Productos/id_18.jpg", "Viper DDR4 16GB 3200MHz RGB", 46000, 0),

    new Producto(19, "Placa de Video Nvidia", "Placas de video", "Componentes", "./img/Img_Productos/id_19.jpg", "Geforce MSI GT 210 1GB DDR3 Low Profile", 49400, 0),
    new Producto(20, "Placa de Video ASUS", "Placas de video", "Componentes", "./img/Img_Productos/id_20.jpg", "GeForce GTX 1650 4GB GDDR6 Phoenix EVO OC", 159200, 0),
    new Producto(21, "Placa de Video Pny", "Placas de video", "Componentes", "./img/Img_Productos/id_21.jpg", "Geforce RTX 4070 Verto Dual Fan 12GB GDDR6X", 705200, 0),

    new Producto(22, "Disco Solido SSD", "Almacenamiento", "Componentes", "./img/Img_Productos/id_22.jpg", "120GB Adata SU650 Ultimate SATA III", 13000, 0),
    new Producto(23, "Disco Solido SSD Kingston", "Almacenamiento", "Componentes", "./img/Img_Productos/id_23.jpg", "480GB A400 SATA III", 23800, 0),
    new Producto(24, "Disco Solido SSD Team", "Almacenamiento", "Componentes", "./img/Img_Productos/id_24.jpg", "1TB GX2 530MB/s", 45200, 0),

    new Producto(25, "Fuente LNZ", "Fuentes de poder", "Componentes", "./img/Img_Productos/id_25.jpg", "650W LNZ XT650-PS 80% Eficiencia", 31500, 0),
    new Producto(26, "Fuente Deepcool", "Fuentes de poder", "Componentes", "./img/Img_Productos/id_26.jpg", "480GB A400 SATA III", 51800, 0),
    new Producto(27, "Fuente Thermaltake", "Fuentes de poder", "Componentes", "./img/Img_Productos/id_27.jpg", "750W Thoughpower GF1 80 PLUS Gold Modular", 79000, 0),

    new Producto(28, "Gabinete BRB", "Gabinetes", "Componentes", "./img/Img_Productos/id_28.jpg", "SBP-100 - 500W Gen", 33700, 0),
    new Producto(29, "Gabinete Masterbox", "Gabinetes", "Componentes", "./img/Img_Productos/id_29.jpg", "MB530P ARGB 3xVidrios Templados 3x120mm ARGB Fans atx", 96100, 0),
    new Producto(30, "Gabinete Corsair", "Gabinetes", "Componentes", "./img/Img_Productos/id_30.jpg", "465X RGB iCue Smart Mid Tower White", 12900, 0),

    new Producto(31, "Mouse Logitech", "Mouses", "Perifericos", "./img/Img_Productos/id_31.jpg", "M90 Black", 5640, 0),
    new Producto(32, "Mouse MSI Clutch", "Mouses", "Perifericos", "./img/Img_Productos/id_32.jpg", "GM41 RGB Lightweight Sensor PIXART 3389 16000DPI", 21000, 0),

    new Producto(33, "Teclado Mecánico TDagger", "Teclados", "Perifericos", "./img/Img_Productos/id_33.jpg", "T-TGK310 Rainbow Switch Blue", 24600, 0),
    new Producto(34, "Teclado Mecanico Redragon", "Teclados", "Perifericos", "./img/Img_Productos/id_34.jpg", "K550 Yama Black RGB", 50100, 0),

    new Producto(35, "Auricular Redragon", "Auriculares", "Perifericos", "./img/Img_Productos/id_35.jpg", "H260 Hylas White RGB", 19000, 0),
    new Producto(36, "Auriculares HyperX", "Auriculares", "Perifericos", "./img/Img_Productos/id_36.jpg", "Gaming Cloud II Wireless", 92400, 0),

    new Producto(37, "Monitor Led Gfast", "Monitores", "Componentes", "/img/Img_Productos/id_37.jpg", "19.5 pulgadas T-195 VGAHDMI", 64000, 0),
    new Producto(38, "Monitor Samsung", "Monitores", "Componentes", "/img/Img_Productos/id_38.jpg", "24 pulgadas Curvo F390 Full HD FreeSync", 103000, 0),
    new Producto(39, "Monitor Led Asus", "Monitores", "Componentes", "/img/Img_Productos/id_39.jpg", "LED TN 24 VG248QG-J FHD 165Hz 0.5Ms Freesync Gsync", 215000, 0),

    new Producto(40, "Diskpro", "Estabilizadores", "Estabilizadores", "/img/Img_Productos/id_40.jpg", "TCA-2000N LYONN AVR", 12800, 0),
    new Producto(41, "UPS TRV", "Estabilizadores", "Estabilizadores", "/img/Img_Productos/id_41.jpg", "650 C/USB", 46000, 0),
    new Producto(42, "UPS APC", "Estabilizadores", "Estabilizadores", "/img/Img_Productos/id_42.jpg", "BACK EASY BV 1000VA", 109000, 0),

    new Producto(43, "Windows 11 Pro", "Sistema Operativo", "Sistema Operativo", "/img/Img_Productos/id_43.jpg", "64B OEM SISTEMA NUEVO FISICO", 63000, 0),
]


