class WebserviceController < ApplicationController
  skip_before_action :require_login
  include WashOut::SOAP
  soap_service namespace: "ProjetoInfinit"

  # Teste 
  soap_action "integer_to_string",
              :args   => {:postal_code => :integer},
              :return => :string
  def integer_to_string
    render :soap => params[:value].to_s
  end

  # Recebe ID Cliente Retorna relato

  soap_action "relatorio",
	       :args => {:cliente_id => :integer},
               :return => :string
  def relatorio
  @busca = Relato.where(cliente_id: params[:value]) 

  render :soap => @busca.id
       
  end




  soap_action "concat",
              :args   => { :a => :string, :b => :string },
              :return => :string
  def concat
    render :soap => (params[:a] + params[:b])
  end

end
