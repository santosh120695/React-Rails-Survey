json.extract! survey, :id, :name, :description, :scheduled_time, :end_time, :active, :created_at, :updated_at
json.url survey_url(survey, format: :json)
