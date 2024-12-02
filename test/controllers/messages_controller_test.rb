require "test_helper"

class MessagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @message = messages(:one)
  end

  #Message validation test
  test "should create valid message" do
    assert_difference("Message.count", 1) do
      post messages_url, params: { message: { body: '❤️' } }
    end

    created_message = Message.last
    assert_equal '❤️', created_message.body
  end

  test "should not create invalid message" do
    assert_no_difference("Message.count") do
      post messages_url, params: { message: { body: 'I did indeed write a test for this 😎' } }
    end
  end


  test "should get index" do
    get messages_url
    assert_response :success
  end

  test "should get new" do
    get new_message_url
    assert_response :success
  end



  test "should show message" do
    get message_url(@message)
    assert_response :success
  end

  test "should get edit" do
    get edit_message_url(@message)
    assert_response :success
  end


  test "should destroy message" do
    assert_difference("Message.count", -1) do
      delete message_url(@message)
    end

    assert_redirected_to messages_url
  end
end
