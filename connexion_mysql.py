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
