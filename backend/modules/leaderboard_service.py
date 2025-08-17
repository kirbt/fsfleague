import requests
import os

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY')

headers = {
    "apikey": SUPABASE_ANON_KEY,
    "Content-Type": "application/json"
}

def get_position_leaderboard(season, position):

  # prepare api fetch
  url = f'{SUPABASE_URL}/rest/v1/rpc/ovr_leaderboard_by_position'
  payload = {
        "target_position_id": position,
        "season_filter": season,
        "limit_count": 10
  }
  response = requests.post(url, headers=headers, json=payload)

  # verify results
  try:
    response.raise_for_status()
    return response.json()
  except requests.exceptions.HTTPError as e:
    return {"error: ": f"database call failed: {response.text}"}


def get_category_leaderboard(season, category):

  # prepare fetch
  url = f'{SUPABASE_URL}/rest/v1/rpc/ovr_leaderboard_by_category'
  payload = {
        "target_category_id": category,
        "season_filter": season,
        "limit_count": 10
  }

  response = requests.post(url, headers=headers, json=payload)

  # verify results
  try:
    response.raise_for_status()
    return response.json()
  except requests.exceptions.HTTPError as e:
    return {"error: ": f"database call failed: {response.text}"}
