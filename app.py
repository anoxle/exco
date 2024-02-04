import discord
from flask import Flask, render_template

app = Flask(__name__)

client = discord.Client()
bot_id = 1200988881860972544  # Replace with your bot's ID

@client.event
async def on_ready():
    global bot_online
    bot_online = True

@client.event
async def on_disconnect():
    global bot_online
    bot_online = False

@app.route('/')
def index():
    online_status = "Bot is online" if bot_online else "Bot is offline!"
    return render_template('statusindex.html', status=online_status)

if __name__ == '__main__':
    client.run('MTIwMDk4ODg4MTg2MDk3MjU0NA.G2cWac.mdH-8Gf98JQFVRkJk8mZ6S7crnWIPhmBkE1kVw')  # Replace with your bot's token
    app.run(host='0.0.0.0', port=5000)  # Run Flask app
