const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry:"./src/index.js", //punto de entrada
    output:{
        path:path.resolve(__dirname,"dist"), // Dist es nombre estandar para especificar carpeta de distribucion.
        filename:"main.js" // Nombre opcional
    },
    resolve:{ //Permite identificar las diferentes extensiones con la sque vamos a trabajar
        extensions:[".js"]
    },
    module:{
        rules:[
            {
                test:/\.js?$/, //identifica archivos js
                exclude:/node_modules/, //excluye carpeta de modulos de node
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:"./public/index.html",
            filename:"index.html" 
        })
    ]
}