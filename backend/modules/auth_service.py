import requests
import os

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')

headers = {
    "apikey": SUPABASE_ANON_KEY,
    "Content-Type": "application/json"
}

def signup_user(email, password):
    try:
        url = f"{SUPABASE_URL}/auth/v1/signup"
        payload = {"email": email, "password": password}
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        return {"error": f"Signup failed: {response.json().get('msg', str(e))}"}
    except Exception as e:
        return {"error": f"Unexpected error during signup: {str(e)}"}

def login_user(email, password):
    try:
        url = f"{SUPABASE_URL}/auth/v1/token?grant_type=password"
        payload = {"email": email, "password": password}
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as e:
        return {"error": f"Login failed: {response.json().get('msg', str(e))}"}
    except Exception as e:
        return {"error": f"Unexpected error during login: {str(e)}"}
