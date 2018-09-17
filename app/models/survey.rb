class Survey < ApplicationRecord
  has_many :questions
  has_many :attempts


  def get_questions
    questions = []
    self.questions.each do |question|
      q = {}
      q["content"]=question.content
      q["id"]=question.id
      q["question_type"] = question.question_type
      if question.question_type == "options"
        options = question.question_options.map {|opt| {label: opt.content, value: opt.content}}
        q["options"] = options
      end
      questions << q
    end
    return questions
  end


  def self.get_active_surveys
      return Survey.where(active:true).map{|s| {head:s.name,description:s.description,link:"/survey/start_survey?id=#{s.id}",id:s.id}}
  end

end
