class ArticleController < ApplicationController
    def show
        @article = Article.find(params[:id])
    end

    def new
    end
    
end
