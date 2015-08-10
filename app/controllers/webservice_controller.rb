class WebserviceController < ApplicationController
  skip_before_action :require_login
  include WashOut::SOAP
  soap_service namespace: "ProjetoInfinit", , wsse_username: "admin@admin.com", wsse_password: "cyber"

  # Teste 
  soap_action "integer_to_string",
              :args   => {:postal_code => :integer},
              :return => :string
  def integer_to_string
    render :soap => params[:value].to_s
  end

  # Recebe ID Cliente Retorna relato

  soap_action "relatorio",
	       :args => :integer,
               :return => :string
  def relatorio
  @busca = Relorio.where(cliente_id: params[:cliente_id])
        render :soap => @busca.id 
  end




  soap_action "concat",
              :args   => { :a => :string, :b => :string },
              :return => :string
  def concat
    render :soap => (params[:a] + params[:b])
  end

end
