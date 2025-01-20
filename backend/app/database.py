from model import User, Data_enterprise, Data_points, Data_POST_request
from fastapi import FastAPI, HTTPException
from datetime import datetime
import bcrypt
import gridfs
from pymongo import MongoClient
import motor.motor_asyncio

# MongoDB Driver and client creation
# client = motor.motor_asyncio.AsyncIOMotorClient(
#     "mongodb://root:12Grai%3F34icamDBr@195.35.0.41:27017/"
# )
client = MongoClient("mongodb://root:12Grai%3F34icamDBr@195.35.0.41:27017/")  
# Remplacez par votre URI de connexion


# Database
database = client['Icam']
users_collection = database.users
enterprises_collection = database.enterprises
answers_collection = database.answers
cases_collection = database.MSR

fs=gridfs.GridFS(database, collection="GRAI")

# with open('C:/Users/boris/Documents/GPS_2024/supplychain/farmstack_project/backend/uploads/test.png', 'rb') as file:
#     file_id = fs.put(file, filename='test')

# # # Exemple : Récupérer un fichier depuis GridFS
# # grid_out = fs.get(file_id)
# # file_data = grid_out.read()
# # output_path='C:/Users/boris/Documents/test.png'
# # with open(output_path, 'wb') as output_file:
# #     output_file.write(file_data)
# print(f'Fichier sauvegardé dans GridFS ')

# Hash password
async def hash_password(password: str, salt: bytes = None) -> tuple[str, str]:
    # Generate a new salt if not provided
    if salt is None:
        salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt)
    return hashed_password.decode("utf-8"), salt.decode("utf-8")

# register a user in database
async def register_user(user: User):
    existing_user = await users_collection.find_one({"username": user.username})

    # raise an error if the user already exists
    if existing_user:
        raise HTTPException(status_code=400, detail="User already registered")

    # register if user does not already exist
    hashed_password, salt = await hash_password(user.password)
    user.password = hashed_password
    user.salt = salt  # Store the salt
    await users_collection.insert_one(user.dict())  # Assumes `user` is a pydantic model

    return {"message": "Registration successful"}

# login a user
async def login(username: str, password: str):
    user = await users_collection.find_one({"username": username})
    if user:
        stored_password_hash = user["password"]
        stored_salt = user["salt"]
        if bcrypt.checkpw(password.encode("utf-8"), stored_password_hash.encode("utf-8")):
            return {"message": "Login successful"}
        else:
            raise HTTPException(status_code=401, detail="Invalid username or password")
    else:
        raise HTTPException(status_code=401, detail="Authentication failed")

# saving enterprises data for points counting
async def save_points(data: Data_points):
    try:
        result = await cases_collection.insert_one(data.dict())
        if result.acknowledged:
            return {"message": "Data saved successfully"}
        else:
            return {"message": "Error saving data to MongoDB"}
    except motor.motor_asyncio.errors.WriteError as e:
        return {"message": f"MongoDB Error: {str(e)}"}

# saving enterprises data
async def save_enterprise(data: Data_enterprise):
    try:
        data_with_date = data.dict()
        data_with_date["saved_date"] = datetime.now().strftime("%Y-%m-%d")
        result = await enterprises_collection.insert_one(data_with_date)
        if result.acknowledged:
            return {"message": "Data saved successfully"}
        else:
            return {"message": "Error saving data to MongoDB"}
    except motor.motor_asyncio.errors.WriteError as e:
        return {"message": f"MongoDB Error: {str(e)}"}

# saving question/answers to MongoDB
async def save_data(data: list[Data_POST_request]):
    try:
        result = await answers_collection.insert_many([dict(d) for d in data])
        if result.acknowledged:
            return {"message": "Data saved successfully"}
        else:
            return {"message": "Error saving data to MongoDB"}
    except Exception as e:
        return {"message": f"Motor Error: {str(e)}"}
