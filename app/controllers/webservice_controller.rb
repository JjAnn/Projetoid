class WebserviceController < ApplicationController
  soap_service namespace: 'urn:WashOut'

  # Teste 
  soap_action "integer_to_string",
              :args   => :integer,
              :return => :string
  def integer_to_string
    render :soap => params[:value].to_s
  end

  # Recebe ID Cliente Retorna relato

  soap_action "relatorio",
	:args => :integer,
        :return => :string
  def relatorio

  @busca = Relorio.where(cliente_id: params[:value])
        render :soap => @busca.id 
  end




  soap_action "concat",
              :args   => { :a => :string, :b => :string },
              :return => :string
  def concat
    render :soap => (params[:a] + params[:b])
  end

end
