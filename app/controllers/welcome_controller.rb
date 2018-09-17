class WelcomeController < ApplicationController
  def index
    @active_survey=Survey.get_active_surveys
    render component: 'main/Home' ,props: {active_surveys:@active_survey},prerender: false
  end
end
