class SurveysController < ApplicationController
  before_action :set_survey, only: [:show, :edit, :update, :destroy,:start_survey]

  # GET /surveys
  # GET /surveys.json
  def index
    render json: Survey.all
  end

  # GET /surveys/1
  # GET /surveys/1.json
  def show
     render json: @survey
  end

  # GET /surveys/new
  def new
    @survey = Survey.new
  end

   def start_survey
      attempt=Attempt.create!(survey_id:@survey.id)
      render component: 'main/Survey' ,props: {survey:@survey,questions:@survey.get_questions,token:form_authenticity_token,attempt:attempt} ,layout: "application" ,prerender:false
  end

  def submit_survey
      params[:question].each do |key ,value|
        Answer.create!(question_id:key,content:value,attempt_id:params[:attempt])
      end
  end

    def user_info
     u= User.create(params.require(:user).permit(:name,:email,:employee_id))
     Attempt.find(params[:attempt]).update(user_id:u.id)
  end

  # GET /surveys/1/edit
  def edit
  end

  # POST /surveys
  # POST /surveys.json
  def create
    @survey = Survey.new(survey_params)

    respond_to do |format|
      if @survey.save
        format.html { redirect_to @survey, notice: 'Survey was successfully created.' }
        format.json { render :show, status: :created, location: @survey }
      else
        format.html { render :new }
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /surveys/1
  # PATCH/PUT /surveys/1.json
  def update
    respond_to do |format|
      if @survey.update(survey_params)
        format.html { redirect_to @survey, notice: 'Survey was successfully updated.' }
        format.json { render :show, status: :ok, location: @survey }
      else
        format.html { render :edit }
        format.json { render json: @survey.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /surveys/1
  # DELETE /surveys/1.json
  def destroy
    @survey.destroy
    respond_to do |format|
      format.html { redirect_to surveys_url, notice: 'Survey was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_survey
      @survey = Survey.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def survey_params
      params.require(:survey).permit(:name, :description, :scheduled_time, :end_time, :active)
    end
end
