import mysql.connector

# Paramètres de connexion
config = {
    'user': 'Bryan',
    'password': 'Basketball2.0',
    'host': 'localhost',
    'database': 'musique'
}

# Établir la connexion
connexion = mysql.connector.connect(**config)

if connexion.is_connected():
    print("Connexion réussie")
else:
    print("Échec de la connexion")


from flask import Flask, request

app = Flask(__name__)

@app.route('/inscription', methods=['POST'])
def inscription():
    nom = request.form['nom']
    email = request.form['email']
    mot_de_passe = request.form['motdepasse']
    # Traitez ces données (insérez-les dans la base de données, etc.)
    return "Données capturées : {} - {} - {}".format(nom, email, mot_de_passe)

if __name__ == '__main__':
    app.run()
