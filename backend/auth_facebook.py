import requests

FACEBOOK_APP_ID = "YOUR_APP_ID"
FACEBOOK_APP_SECRET = "YOUR_APP_SECRET"

def verify_facebook_token(access_token: str):
    debug_url = "https://graph.facebook.com/debug_token"
    
    params = {
        "input_token": access_token,
        "access_token": f"{FACEBOOK_APP_ID}|{FACEBOOK_APP_SECRET}"
    }

    response = requests.get(debug_url, params=params)
    data = response.json()

    if not data.get("data", {}).get("is_valid"):
        return None

    return data["data"]


def get_facebook_user(access_token: str):
    url = "https://graph.facebook.com/me"
    params = {
        "fields": "id,name,email",
        "access_token": access_token
    }
    response = requests.get(url, params=params)
    return response.json()


from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from auth_facebook import verify_facebook_token, get_facebook_user
from jwt_utils import create_jwt_token
from db import get_user_by_facebook_id, create_user

router = APIRouter()

class FacebookLoginRequest(BaseModel):
    access_token: str

@router.post("/auth/facebook")
def facebook_login(payload: FacebookLoginRequest):
    token_data = verify_facebook_token(payload.access_token)
    if not token_data:
        raise HTTPException(status_code=401, detail="Invalid Facebook token")

    fb_user = get_facebook_user(payload.access_token)

    user = get_user_by_facebook_id(fb_user["id"])

    if not user:
        user = create_user(
            email=fb_user.get("email"),
            facebook_id=fb_user["id"],
            name=fb_user["name"],
            provider="facebook"
        )

    jwt_token = create_jwt_token(user.id)

    return {
        "access_token": jwt_token,
        "token_type": "bearer"
    }
