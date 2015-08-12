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
	       :args => {:a => :integer},
               :return => :string
  def relatorio
  @relato = Relato.where(cliente_id: params[:a]).pluck(:id, :projeto_id, :local_id)
  @reltask = Reltask.where(relato_id: @relato.id)
  render :soap =>  ("Relatorio:" + @relato.to_s + @reltask.to_s )
       
  end

  soap_action "tabelas",
      :args => {:a => :string },
      :return => :string

   def tabelas
   @tabcliente = Cliente.column_names
   @tablocal = Local.column_names
   @tabprojeto = Projeto.column_names
   @tabtask = Task.column_names 
   @tabrelato = Relato.column_names
   @tabreltask = Reltask.column_names

   render :soap => ("Cliente" + @tabcliente.to_s + "Local" + @tablocal.to_s + "Projeto" + @tabprojeto.to_s + "Atividade" + @tabtask.to_s + "Relatorio" + @tabrelato.to_s + "Task Report" + @tabreltask.to_s  )
   end

  soap_action "concat",
              :args   => { :a => :string, :b => :string },
              :return => :string
  def concat
    render :soap => (params[:a] + params[:b])
  end

end
