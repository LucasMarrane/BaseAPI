import { SecurityHash } from "./hash";

const crypto = require("crypto");

export  class Security {

      private static algorithm = "aes-256-cbc";
      private key = crypto.randomBytes(32);
      private iv = crypto.randomBytes(16);

     hash = Buffer.from(
        JSON.stringify({
            iv: this.iv.toString("hex"),
            key: this.key.toString("hex"),
        })
    ).toString("base64");

     encrypt(text, pHash = SecurityHash) {
        let Hash: any = Buffer.from(pHash, "base64").toString("ascii");
        Hash = JSON.parse(Hash);      
        let cipher = crypto.createCipheriv(Security.algorithm, Buffer.from(Hash.key, "hex"), Buffer.from(Hash.iv, "hex"));
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return {
            hash: pHash,
            encryptedData: encrypted.toString("hex"),
        }
    }
    
    static decrypt(text, hash = SecurityHash) {
        hash = Buffer.from(hash, "base64").toString("ascii");
        let Hash = JSON.parse(hash);
        let tiv = Buffer.from(Hash.iv, "hex");
        let tkey = Buffer.from(Hash.key, "hex");
        let encryptedText = Buffer.from(text, "hex");
        let decipher = crypto.createDecipheriv(Security.algorithm, Buffer.from(tkey), tiv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}