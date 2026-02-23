# # Uses Authlib to handle Google & Facebook OAuth flows
# from authlib.integrations.starlette_client import OAuth
# import os
# from dotenv import load_dotenv


# load_dotenv()


# oauth = OAuth()


# GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
# GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
# FACEBOOK_CLIENT_ID = os.getenv("FACEBOOK_CLIENT_ID")
# FACEBOOK_CLIENT_SECRET = os.getenv("FACEBOOK_CLIENT_SECRET")


# # Register providers
# oauth.register(
# name='google',
# client_id=GOOGLE_CLIENT_ID,
# client_secret=GOOGLE_CLIENT_SECRET,
# server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
# client_kwargs={'scope': 'openid email profile'},
# )


# oauth.register(
# name='facebook',
# client_id=FACEBOOK_CLIENT_ID,
# client_secret=FACEBOOK_CLIENT_SECRET,
# access_token_url='https://graph.facebook.com/v12.0/oauth/access_token',
# authorize_url='https://www.facebook.com/v12.0/dialog/oauth',
# api_base_url='https://graph.facebook.com/v12.0/',
# client_kwargs={'scope': 'email public_profile'},
# )